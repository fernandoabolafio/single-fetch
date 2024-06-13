import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCountryNameAndFlag } from "@/lib/locations";
import { unstable_defineLoader as defineLoader } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

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
        <CardHeader className="flex justify-between w-full flex-row">
          <CardTitle className="capitalize text-xl">
            <Link to={`/location/${country}/regions`}>
              {" "}
              {countryNameAndFlag}{" "}
            </Link>
          </CardTitle>
          <Teletransport />
        </CardHeader>
        <CardContent>
          <Outlet />
        </CardContent>
      </Card>
    </main>
  );
}

export function Teletransport() {
  return (
    <Menubar >
      <MenubarMenu>
        <MenubarTrigger>Teletransport to</MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>Brazil</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>
                <Link to={'/location/brazil/regions/north'}>North</Link>
              </MenubarItem>
              <MenubarItem>
                <Link to={'/location/brazil/regions/northeast'}>Northeast</Link>
              </MenubarItem>
              <MenubarItem>
                <Link to={'/location/brazil/regions/central-west'}>Central West</Link>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>Denmark</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>
                <Link to={'/location/denmark/regions/zealand'}>Zealand</Link>
              </MenubarItem>
              <MenubarItem>
                <Link to={'/location/denmark/regions/jutland'}>Jutland</Link>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
