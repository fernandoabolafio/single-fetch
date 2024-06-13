import { getImageUrl } from "@/lib/locations";
import { unstable_defineLoader as defineLoader } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";

export const loader = defineLoader(({ params }) => {
  invariant(params.region, "Region is required");
  return { region: params.region };
});

// display the country with a flag
export default function CountryRegion() {
  const { region } = useLoaderData<typeof loader>();

  return (
    <div className="py-2">
      <img
        alt="region"
        className="w-[500px] h-[500px] object-cover rounded-lg"
        src={getImageUrl(region)}
      />
    </div>
  );
}
