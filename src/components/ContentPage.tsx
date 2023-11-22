import { Entry } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  Document as ContentfulDocument,
  BLOCKS,
} from "@contentful/rich-text-types";

import { Image } from "react-bootstrap";

import { BasicContentPageSkeleton } from "../contentful/ContentTypes";

const ContentPage: React.FC<{ entry: Entry<BasicContentPageSkeleton> }> = (
  props
) => {
  const renderOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: (node: any, children: any) => {
        // target the contentType of the EMBEDDED_ENTRY to display as you need
        if (node.data.target.sys.contentType.sys.id === "codeBlock") {
          return (
            <pre>
              <code>{node.data.target.fields.code}</code>
            </pre>
          );
        }

        if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
          return (
            <iframe
              src={node.data.target.fields.embedUrl}
              height="100%"
              width="100%"
              frameBorder="0"
              scrolling="no"
              title={node.data.target.fields.title}
              allowFullScreen={true}
            />
          );
        }
      },

      [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => {
        // render the EMBEDDED_ASSET as you need
        return (
          <Image
            src={`https://${node.data.target.fields.file.url}`}
            alt={node.data.target.fields.description}
            fluid
          />
        );
      },
    },
  };

  let body: React.ReactNode;

  body = documentToReactComponents(
    props.entry.fields.body as ContentfulDocument,
    renderOptions
  );

  return (
    <>
      Title: {props.entry.fields.title}
      <br />
      Slug: {props.entry.fields.slug}
      <br />
      <div>{body}</div>
    </>
  );
};

export default ContentPage;
