import type { Route } from "./+types/request-demo";
import { getRequestDemoContent, type PageContent } from "~/services/pageContent";
import { renderFooter, renderHeader, renderHero } from "~/services/pageRenderer";
import RequestDemoForm from "~/components/RequestDemoForm";

export function meta({ data }: Route.MetaArgs) {
  if (!data) return [{ title: "Stretch Matters" }];
  const content = data as PageContent;
  return [{ title: content.meta.title }, { name: "description", content: content.meta.description }];
}

export function loader() {
  return getRequestDemoContent();
}

export default function RequestDemo({ loaderData: data }: Route.ComponentProps) {
  if (!data) return null;
  const content = data as PageContent;

  return (
    <div>
      {renderHeader(content.header)}
      {renderHero(content.hero)}
      <main>
        <RequestDemoForm />
      </main>
      {renderFooter(content.footer)}
    </div>
  );
}
