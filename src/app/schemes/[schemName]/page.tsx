"use client";
import Link from "next/link";
import { schemContext } from "../../../providers/schemesProvider";
import { useContext } from "react";

export default function Scheme(context: any) {
  const { schemeAPIData, updateScheme } = useContext(schemContext)
  const slug = context.params.schemName;
  let scheme;
  if (context.searchParams.category == "all-schemes") {
    const schemes = schemeAPIData.allSchemes;
    scheme = schemes.filter((s) => s.fields.slug == slug);
  } else if (context.searchParams.category == "state-schemes") {
    const schemes = schemeAPIData.stateSchemes;
    scheme = schemes.filter((s) => s.fields.slug == slug);
  } else {
    const schemes = schemeAPIData.centralSchemes;
    scheme = schemes.filter((s) => s.fields.slug == slug);
  }
  return (
    <>
      <div className="max-w-lm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link href="/search" style={{ textDecoration: "underline !important" }}>
          Back
        </Link>
        <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {scheme[0].fields.schemeName}
        </div>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {scheme[0].fields.briefDescription}
        </p>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {scheme[0].fields.briefDescription}
        </p>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {scheme[0].fields.briefDescription}
        </p>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {scheme[0].fields.briefDescription}
        </p>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {scheme[0].fields.briefDescription}
        </p>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {scheme[0].fields.briefDescription}
        </p>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {scheme[0].fields.briefDescription}
        </p>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {scheme[0].fields.briefDescription}
        </p>

        {scheme[0].fields.tags.map((e: any) => (
          <a
            key={e}
            href="#"
            className="inline-flex items-center p-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {e}
          </a>
        ))}
      </div>
    </>
  );
}
