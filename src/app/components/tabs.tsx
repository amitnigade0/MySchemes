"use client"
import { useContext, useState } from "react";
import Card from "./card";
import { schemContext } from "@/providers/schemesProvider";
import Link from "next/link";

export default function Tabs(prop: any) {
  const { schemeAPIData, updateScheme } = useContext(schemContext)
  const [tab, setTab] = useState("all-schemes");

  if (schemeAPIData.allSchemes[0].fields.schemeName.includes('NSAP')) {
    schemeAPIData.allSchemes[0].fields.schemeName = "NNNQQ - Indira Gandhi National Old Age Pension Scheme"
    updateScheme(schemeAPIData)
  }
  let allSchemeData = [];
  let stateSchemeData = [];
  let centralSchemeData = [];

if(prop.searchContent.length > 0) {
  allSchemeData = schemeAPIData.allSchemes.filter(el => {
    return el.fields.schemeName.includes(prop.searchContent) || el.fields.briefDescription.includes(prop.searchContent)
  })
  stateSchemeData = schemeAPIData.stateSchemes.filter(el => {
    return el.fields.schemeName.includes(prop.searchContent) || el.fields.briefDescription.includes(prop.searchContent)
  })
  centralSchemeData = schemeAPIData.centralSchemes.filter(el => {
    return el.fields.schemeName.includes(prop.searchContent) || el.fields.briefDescription.includes(prop.searchContent)
  })
} else {
  allSchemeData = schemeAPIData.allSchemes;
  stateSchemeData = schemeAPIData.stateSchemes;
  centralSchemeData = schemeAPIData.centralSchemes;
}

  const tabsList = [
    {
      id: "allSchemes",
      label: "all-schemes",
      title: "All Schemes",
      content: allSchemeData,
    },

    {
      id: "stateSchemes",
      label: "state-schemes",
      title: "State Schemes",
      content: stateSchemeData,
    },

    {
      id: "centralSchemes",
      label: "central-schemes",
      title: "Central Schemes",
      content: centralSchemeData,
    },
  ];

  const handleClick = (elem: any) => {  
    setTab(`${elem.target.id}`);
  };

  return (
    <>
    <Link href='/testScheme' style={{ textDecoration: "underline !important" }}>test route</Link>
      <div>
        <div className="max-w-md mx-auto border-b border-gray-200 dark:border-gray-700">
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="default-tab"
            data-tabs-toggle="#default-tab-content"
            role="tablist"
          >
            {tabsList.map((el) => (
              <li className="me-2 " role="presentation" key={el.id}>
                <button
                  className="inline-block p-4 border-b-2 rounded-t-lg"
                  id={el.label}
                  type="button"
                  role="tab"
                  aria-controls={el.id}
                  aria-selected="false"
                  onClick={(e) => handleClick(e)}
                  style={
                    tab === el.label
                      ? { borderBottomColor: "aqua" }
                      : { borderBottomColor: "" }
                  }
                >
                  {el.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div id="default-tab-content">
          {tabsList.map((el) => (
            <div
              key={el.id}
              className={
                tab === el.label
                  ? "p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                  : "hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              }
              id={el.id}
              role="tabpanel"
              aria-labelledby={el.label}
            >
              <div className="text-sm text-gray-500 dark:text-gray-400">
              {el.content.length > 0 ? el.content.map((e: any) => (
                <Card key={e.fields.slug} data={e.fields} schemeCat={tab}/>
              )) : <h1>No results found</h1>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
