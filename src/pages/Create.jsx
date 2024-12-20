import React from "react";

export default function CreatePage() {
  return (
    <div className="flex flex-col px-10 pt-5 items-center space-y-8">
      <div className="flex flex-col text-start justify-start items-start w-full">
        <h1 className="text-2xl font-bold">Crear Deportista</h1>
        <h1 className="text-md text-neutral-500">
          En esta seccion podras ingresar los datos del deportista que va a
          ingresar
        </h1>
      </div>
      <div className="flex h-1/2 w-5/6 bg-white shadow-lg rounded-xl">
        <div className="flex flex-col w-full items-center">
          <h1 className="text-xl font-bold">Registro</h1>
          <div className="flex flex-col h-full w-full space-y-3">
            <div className="flex flex-col w-full px-4">
              <label>Pais</label>
              <input
                type="text"
                className="h-12 border rounded-xl"
                placeholder="Pais"
              />
            </div>
            <div className="flex flex-col w-full px-4">
              <label>Nombre</label>
              <input
                type="text"
                className="h-12 border rounded-xl"
                placeholder="Nombre"
              />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
