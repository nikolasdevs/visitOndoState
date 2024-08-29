import Link from "next/link";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import React from "react";
import { TabsContent } from "./ui/tabs";

const CardInfo = () => {
  return (
    <>
      <TabsContent value="idanreHill" className="cardInfo  ">
        <Card className="card">
          <CardHeader>
            <CardTitle className="cardInfo-title">Idanre Hill</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <CardDescription className="cardInfo-description">
              The image is a representation of the Idanre Hill the first
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Link className="text-primary" href="/">
              More
            </Link>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="hotel" className="cardInfo ">
        <Card className="card">
          <CardHeader>
            <CardTitle className="cardInfo-title">Hotel</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <CardDescription className="cardInfo-description">
              The image is a representation of the hotel the first
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Link className="text-primary" href="/">
              More
            </Link>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="idanreHill2" className="cardInfo ">
        <Card className="card">
          <CardHeader>
            <CardTitle className="cardInfo-title">Idanre Hill 2</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <CardDescription className="cardInfo-description">
              The image is a representation of the Idanre Hill the second time
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Link className="text-primary" href="/">
              More
            </Link>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="hotel2" className="cardInfo ">
        <Card className="card">
          <CardHeader>
            <CardTitle className="cardInfo-title">Hotel 2</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <CardDescription className="cardInfo-description">
              The image is a representation of the Hotel the second time
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Link className="text-primary" href="/">
              More
            </Link>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="idanreHill3" className="cardInfo ">
        <Card className="card">
          <CardHeader>
            <CardTitle className="cardInfo-title">Idanre Hill 3</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <CardDescription className="cardInfo-description">
              The image is a representation of the Idanre Hill the third time
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Link className="text-primary" href="/">
              More
            </Link>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="hotel3" className="cardInfo ">
        <Card className="card">
          <CardHeader>
            <CardTitle className="cardInfo-title">Hotel 3</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <CardDescription className="cardInfo-description">
              The image is a representation of the Hote the third time
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Link className="text-primary" href="/">
              More
            </Link>
          </CardFooter>
        </Card>
      </TabsContent>
    </>
  );
};

export default CardInfo;
