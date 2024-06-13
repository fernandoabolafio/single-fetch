import { getRegionNameAndEmoji, getRegionsByCountry } from "@/lib/locations";
import {
  LoaderFunctionArgs,
  unstable_defineLoader as defineLoader,
} from "@remix-run/node";
import { Link, Outlet, useLoaderData, useParams } from "@remix-run/react";
import invariant from "tiny-invariant";

export const loader = defineLoader(async ({ params }) => {
  invariant(params.country, "Country is required");
  const regions = getRegionsByCountry(params.country);
  return { regions };
});

// display the country with a flag
export default function Country() {
  const { regions } = useLoaderData<typeof loader>();
  const { region: currentRegion } = useParams();

  return (
    <>
      <div className="flex gap-3">
        {regions.map((region) => (
          <Link
            key={region}
            to={`${region}`}
            className={`capitalize border p-1 rounded-sm ${
              currentRegion === region
                ? " border border-popover-foreground font-bold"
                : ""
            }`}
          >
            {getRegionNameAndEmoji(region)}
          </Link>
        ))}
      </div>
      <Outlet />
    </>
  );
}
