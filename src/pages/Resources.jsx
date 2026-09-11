import { PageIntro, ResourcesGrid } from "@/components/sections";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function ResourcesPage() {
  useDocumentTitle("Technical Resources — Pras Minerals");
  return (
    <>
      <PageIntro eyebrow="Resources" title="Technical information, organized for action." description="Find specifications, drawings, application guidance, compliance documents, and product support resources." />
      <ResourcesGrid />
    </>
  );
}
