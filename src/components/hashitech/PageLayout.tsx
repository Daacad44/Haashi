import { ProfileSidebar } from "./ProfileSidebar";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-layout bento-wrap">
      <div className="page-layout-grid">
        <ProfileSidebar />
        <div className="page-main">{children}</div>
      </div>
    </div>
  );
}
