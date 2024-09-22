"use client"
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CanvasRevealEffect } from "../../components/ui/CanvasRevealEffect";
import Link from "next/link";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";



const page = () => {

    return (
        <section className="w-full py-20">
            <h1 className="heading">
                <span className="text-blue-500">ParentPay&apos;s </span>SIMS Next Gen
            </h1>

            {/* remove bg-white dark:bg-black */}
            <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
                {/* add des prop */}
                <Link href="/parentpay/takeregister">
                    <Card className="flex-col p-4 w-72 space-y-4 text-center  h-96 border-black-100">
                        <CardTitle>Take Register</CardTitle>
                        <CardDescription>Take register is designed to make attendnace process easy for UK school teachers.</CardDescription>

                    </Card>
                </Link>
                <Link href="/parentpay/fireregister">
                    <Card className="flex-col p-4 w-72 space-y-4 text-center  h-96  border-black-100">
                        <CardTitle>Fire Register</CardTitle>
                        <CardDescription>Fire register is designed to support admin , teacher and other school staff in case of fire drills and fire emergency.</CardDescription>

                    </Card>

                </Link>
                <Link href="/parentpay/adminconsole">
                    <Card className="flex-col p-4 w-72 space-y-4 text-center  h-96  border-black-100">
                        <CardTitle>Admin console</CardTitle>
                        <CardDescription>Admin console was design to handle all settings in SIMS GEN and other features independent features to support admin tasks.</CardDescription>

                    </Card>
                </Link>
            </div>
        </section>
    );
};

export default page;