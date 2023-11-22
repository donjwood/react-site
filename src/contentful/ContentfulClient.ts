import { ContentfulClientApi, createClient, Entry } from "contentful";
import { BasicContentPageSkeleton } from "./ContentTypes";

class ContentfulClient {
  client: ContentfulClientApi<undefined>;

  public constructor() {
    this.client = createClient({
      space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
      accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    });
  }

  public async getBasicContentPage(slug: string): Promise<Entry<BasicContentPageSkeleton>> {
    const entries = await this.client.getEntries<BasicContentPageSkeleton>({
      content_type: "page",
      "fields.slug[match]": slug,
    });
    const entry = entries.items[0];
    return entry;
  }
}

export default ContentfulClient;

