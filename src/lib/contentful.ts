import { createClient } from "contentful";
import { createClient as createManagementClient } from "contentful-management";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT,
});

const managementClient = createManagementClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_TOKEN!,
});

export async function getProjects() {
  const res = await client.getEntries({ content_type: "project" });
  return res.items.map((item) => ({
    id: item.sys.id,
    company: item.fields.company,
    year: item.fields.year,
    title: item.fields.title,
    results: item.fields.results.map((result) => ({ title: result })),
    link: item.fields.link,
    image: item.fields.image.fields.file,
  }));
}

export async function uploadFile(file: File) {
  const formData = new FormData();
  formData.append('file', file);
  
  const response = await fetch(
    `https://upload.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/uploads`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_TOKEN}`,
        'Content-Type': 'application/octet-stream'
      },
      body: formData
    }
  );
  
  return response.json();
}

export async function createContactSubmission(data: {
  name: string;
  email: string;
  phone?: string;
  projectType?: string;
  details: string;
  attachment?: File;
}) {
  try {
    const space = await managementClient.getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!);
    const environment = await space.getEnvironment(process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || 'master');

    let attachmentId;
    
    if (data.attachment) {
      const upload = await uploadFile(data.attachment);
      
      const asset = await environment.createAsset({
        fields: {
          title: { 'en-US': data.attachment.name },
          file: { 
            'en-US': {
              contentType: data.attachment.type,
              fileName: data.attachment.name,
              uploadFrom: {
                sys: {
                  type: 'Link',
                  linkType: 'Upload',
                  id: upload.sys.id
                }
              }
            }
          }
        }
      });
      
      const processedAsset = await asset.processForAllLocales();
      await processedAsset.publish();
      attachmentId = processedAsset.sys.id;
    }

    const entry = await environment.createEntry('contactSubmission', {
      fields: {
        name: { 'en-US': data.name },
        email: { 'en-US': data.email },
        phone: { 'en-US': data.phone || '' },
        projectType: { 'en-US': data.projectType || '' },
        details: { 'en-US': data.details },
        ...(attachmentId && {
          attachment: {
            'en-US': {
              sys: {
                type: 'Link',
                linkType: 'Asset',
                id: attachmentId
              }
            }
          }
        })
      }
    });

    await entry.publish();
    return entry;
  } catch (error) {
    console.error('Contentful submission error:', error);
    throw error;
  }
}