import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import DataTable from "react-data-table-component";

export default function ConsultPage() {
  const [Data, setData] = useState();

  const GetData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/deportistas`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.error(error);
      return 0;
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  const columns = [
    {
      name: "Pais",
      selector: (row) => row.pais,
    },
    {
      name: "Nombre",
      selector: (row) => row.name,
    },
    {
      name: "ARRANQUE(KG)",
      selector: (row) => row.none,
      sortable: true,
    },
    {
      name: "ENVION(KG)",
      selector: (row) => row.none,
      sortable: true,
    },
    {
      name: "TOTAL PESO(KG)",
      selector: (row) => row.none,
      sortable: true,
    },
  ];
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-row justify-between px-10 pt-5">
        <div className="flex flex-row space-x-4 items-center">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">Juegos olimpicos</h1>
            <h1 className="text-2xl text-neutral-600">halterofilia</h1>
          </div>
          <a className="bg-slate-600 rounded-xl h-10 px-2 hover:scale-105 hover:bg-slate-500 text-white justify-center items-center" href="/crear">Crear Deportista</a>
        </div>
        <div>
          <img src={Logo} alt="Logo" className="h-10 w-20" />
        </div>
      </div>
      <div className="flex flex-col h-full px-10 pt-4">
        {Data ? (
          <DataTable columns={columns} data={Data} pagination rows={10} />
        ) : (
          <DataTable columns={columns} pagination rows={10} />
        )}
      </div>
    </div>
  );
}
