import * as contentful from "contentful";

type BasicContentPage = {
  contentTypeId: "page";
  fields: {
    title: contentful.EntryFieldTypes.Text;
    slug: contentful.EntryFieldTypes.Text;
    body: contentful.EntryFieldTypes.RichText;
  };
};

class ContentfulClient {
  client: contentful.ContentfulClientApi<undefined>;

  public constructor() {

    console.log(import.meta.env.VITE_CONTENTFUL_SPACE_ID);
    console.log(import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN);


    this.client = contentful.createClient({
      space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
      accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    });
  }

  public async getPage(slug: string): Promise<contentful.Entry<BasicContentPage>> {
    const entries = await this.client.getEntries<BasicContentPage>({
      content_type: "page",
      "fields.slug[match]": slug,
    });
    const entry =  entries.items[0];
    return entry;
  }
}

export default ContentfulClient;
