// import React, { useState } from "react";
// import { GlobalWorkerOptions, getDocument } from "pdfjs-dist/build/pdf";
// import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
// import { ChevronDown, ChevronRight } from "lucide-react";

// GlobalWorkerOptions.workerSrc = pdfjsWorker;

// const App = () => {
//   const [sections, setSections] = useState([]);

//   const handleFileUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onload = async () => {
//       const typedarray = new Uint8Array(reader.result);
//       const pdf = await getDocument({ data: typedarray }).promise;

//       let allItems = [];

//       for (let i = 1; i <= pdf.numPages; i++) {
//         const page = await pdf.getPage(i);
//         const content = await page.getTextContent();
//         allItems = [...allItems, ...content.items];
//       }

//       const structured = groupIntoSections(allItems);
//       setSections(structured);
//     };

//     reader.readAsArrayBuffer(file);
//   };

//   const groupIntoSections = (items) => {
//     const linesMap = new Map();

//     items.forEach((item) => {
//       const text = item.str.trim();
//       if (!text) return;

//       const fontSize = item.transform[0];
//       const y = Math.round(item.transform[5]);
//       const x = item.transform[4];

//       const key = `${y}`;
//       if (!linesMap.has(key)) {
//         linesMap.set(key, []);
//       }
//       linesMap.get(key).push({ text, fontSize, x });
//     });

//     const sortedY = Array.from(linesMap.keys())
//       .map(Number)
//       .sort((a, b) => b - a);

//     const lines = sortedY.map((y) => {
//       const items = linesMap.get(String(y));
//       const sortedItems = items.sort((a, b) => a.x - b.x);
//       const averageFontSize =
//         sortedItems.reduce((acc, cur) => acc + cur.fontSize, 0) / sortedItems.length;
//       return {
//         text: sortedItems.map((i) => i.text).join(" "),
//         fontSize: averageFontSize,
//       };
//     });

//     // Group into sections
//     const sections = [];
//     let currentSection = null;

//     lines.forEach((line) => {
//       if (line.fontSize >= 18) {
//         // Heading
//         if (currentSection) sections.push(currentSection);
//         currentSection = {
//           title: line.text,
//           sub: [],
//           open: false,
//         };
//       } else {
//         if (currentSection) {
//           currentSection.sub.push(line);
//         }
//       }
//     });

//     if (currentSection) sections.push(currentSection);

//     return sections;
//   };

//   const toggleSection = (index) => {
//     setSections((prev) =>
//       prev.map((sec, i) =>
//         i === index ? { ...sec, open: !sec.open } : sec
//       )
//     );
//   };

//   return (
//     <div className="p-6 max-w-3xl mx-auto space-y-6">
//       <h1 className="text-2xl font-bold text-center">📄 Collapsible Resume Viewer</h1>
//       <input
//         type="file"
//         accept="application/pdf"
//         onChange={handleFileUpload}
//         className="block w-full p-2 border rounded"
//       />

//       <div className="space-y-4">
//         {sections.map((section, index) => (
//           <div key={index} className="border rounded shadow p-3">
//             <div
//               className="flex items-center cursor-pointer"
//               onClick={() => toggleSection(index)}
//             >
//               {section.open ? (
//                 <ChevronDown className="w-5 h-5 mr-2" />
//               ) : (
//                 <ChevronRight className="w-5 h-5 mr-2" />
//               )}
//               <h2 className="text-xl font-semibold">{section.title}</h2>
//             </div>

//             {section.open && (
//               <div className="mt-2 space-y-2">
//                 {section.sub.map((line, i) => (
//                   <p
//                     key={i}
//                     style={{
//                       fontSize: `${Math.round(line.fontSize)}px`,
//                       fontWeight: line.fontSize > 14 ? "500" : "normal",
//                     }}
//                     className="text-gray-800"
//                   >
//                     {line.text}
//                   </p>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

import React from "react";
import "./styles/App.css";
import Resume from "./pages/Resume";

function App() {
  return (
    <div className="App">
      <Resume />
    </div>
  );
}

export default App;
