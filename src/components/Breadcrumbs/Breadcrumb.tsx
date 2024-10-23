import Link from "next/link";

interface BreadcrumbProps {
  pageName: string;
  innerPageName?: string;
  innerPageLink?: string;
}

const Breadcrumb = ({
  pageName,
  innerPageName,
  innerPageLink,
}: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-[26px] font-bold leading-[30px] text-dark dark:text-white">
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-[2px]">
          <li>
            <Link className="font-medium" href="/admin/dashboard">
              Dashboard /
            </Link>
          </li>
          <li>
            <Link className="font-medium " href={`${innerPageLink}`}>
              {innerPageName}
            </Link>
          </li>

          <li className="font-medium  text-primary">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
