import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCountryNameAndFlag } from "@/lib/locations";
import { unstable_defineLoader as defineLoader } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";

export const loader = defineLoader(({ params }) => {
  invariant(params.country, "Country is required");
  const countryNameAndFlag = getCountryNameAndFlag(params.country);
  return { countryNameAndFlag, country: params.country };
});

// display the country with a flag
export default function Country() {
  const { countryNameAndFlag, country } = useLoaderData<typeof loader>();

  return (
    <main className="flex w-full justify-center">
      <Card className="w-[800px]">
        <CardHeader>
          <CardTitle className="capitalize text-xl">
            <Link to={`/location/${country}/regions`}>
              {" "}
              {countryNameAndFlag}{" "}
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Outlet />
        </CardContent>
      </Card>
    </main>
  );
}
