import type { Route } from "./+types/_index";
import { getHomeContent, type PageContent } from "~/services/pageContent";
import { renderFooter, renderHeader, renderHero, renderSections } from "~/services/pageRenderer";

export function meta({ data }: Route.MetaArgs) {
  if (!data) return [{ title: "Stretch Matters" }];
  const content = data as PageContent;
  return [{ title: content.meta.title }, { name: "description", content: content.meta.description }];
}

export function loader() {
  return getHomeContent();
}

export default function Layout({ loaderData: data }: Route.ComponentProps) {
  if (!data) return null;
  const content = data as PageContent;

  return (
    <div>
      {renderHeader(content.header)}
      {renderHero(content.hero)}
      <main>
        {renderSections(content.sections)}
      </main>
      {renderFooter(content.footer)}
    </div>
  );
}
