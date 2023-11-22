import * as contentful from "contentful";

export type BasicContentPageSkeleton = {
  contentTypeId: "page";
  fields: {
    title: contentful.EntryFieldTypes.Text;
    slug: contentful.EntryFieldTypes.Text;
    body: contentful.EntryFieldTypes.RichText;
  };
};