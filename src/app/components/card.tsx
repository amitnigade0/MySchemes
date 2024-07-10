import Link from "next/link";

export default function Card(prop: any) {
  return (
    <>
      <div className="max-w-lm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link
          className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          href={{
            pathname: `/schemes/${prop.data.slug}`,
            query: {
              category: prop.schemeCat
            }
          }}
        >
          {prop.data.schemeName}
        </Link> 


        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {prop.data.briefDescription}
        </p>

        {prop.data.tags.map((e: any) => (
               <a key={e}
               href="#" 
               className="inline-flex items-center p-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
               {e}
             </a>
        ))}
      </div>
    </>
  );
}
