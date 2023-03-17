import React, { useState } from "react";
import Link from "next/link";
import Router from 'next/router';
import useValidacion from "@/hooks/useValidation";
import validarContact from "@/validation/ValidationContact";
import Error from "@/errors/Errors";

const Contact = () => {
  const STATE_INICIAL = {
    nombre: '',
    email: '',
    numero: '',
    asunto: "",
    mensaje: ""
  }

  const [error, guardarError] = useState(false);

  const { valores, errores, handleSubmit, handleChange, handleBlur, resetearFormulario } = useValidacion(STATE_INICIAL, validarContact, handleRegistroSubmit);

  const { nombre, email, numero, mensaje, asunto } = valores;

  async function handleRegistroSubmit() {
    try {
      const order = {
        nombre,
        email,
        numero,
        asunto,
        mensaje,
      };

      Router.push('/');
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  return (
    <div className="w-full h-full mt-10">
      <div className="max-w-[1200px] m-auto px-2 py-16 w-full ">
        <div className="grid gap-2 lg:grid-cols-5">
          {/* left */ }
          <div className="hidden w-full h-full col-span-3 p-4 rounded-md shadow-md pt-36 md:flex lg:col-span-2 shadow-white">
            <div className="h-full lg:p-4 ">
              <div></div>
              <div>
                <h2 className="pt-8 text-xl font-bold text-black font_titulos">Correo electrónico</h2>
                <span className="py-4 text-black">
                  agencia@homtail.com
                </span>
              </div>
              <div>
                <p className="pt-8 text-xl font-bold text-black font_titulos">
                  Los telefonos
                </p>
                <span>+48 (22) 208 61 11 </span>
                <p className="pt-8 text-xl font-bold text-black font_titulos">
                  Direccion
                </p>
                <span>Montevideo, Uruguay</span>
              </div>

              <div>
                <p className="pt-8 text-xl font-bold text-black font_titulos">
                  Redes sociales
                </p>
                <div className="flex gap-2">
                  <p>insta</p>
                  <p>fb</p>
                  <p>tw</p>
                </div>
                <div>
                </div>
              </div>
            </div>
          </div>

          {/* right */ }
          <div className="w-full h-auto col-span-3 mx-auto text-white shadow-md shadow-white rounded-xl lg:p-4">
            <div className="p-4">
              <div>
                <h2 className="py-2 text-2xl font-bold text-black font_titulos">¿Quieres cotizar un proyecto? </h2>
                <p className="py-4 text-black font_text">
                  Solo cuéntanos sobre tu proyecto, cuáles son tus objetivos y comencemos. .
                </p>
              </div>
              <form
                onSubmit={ handleSubmit }
                noValidate action=""
                method="" encType="">
                <div className="grid w-full gap-4 py-2 mt-6 md:grid-cols-2">
                  <div className="flex flex-col">
                    <label className="py-2 text-sm font-bold text-black font_titulos">Nombre</label>
                    <input
                      className={ errores.nombre ? "flex p-3 text-black border-2 border-gray-300 rounded-lg border-b-red-700 outline-none" : " outline-none flex p-3 text-black border-2 border-gray-300 rounded-lg " }
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={ nombre }
                      onChange={ handleChange }
                      onBlur={ handleBlur }
                    />
                    { errores.nombre && <Error>  { errores.nombre }</Error> }
                  </div>

                  <div className="flex flex-col">
                    <label className="py-2 text-sm font-bold text-black font_titulos">
                      Celular
                    </label>
                    <input
                      className={ errores.numero ? "flex p-3 text-black border-2 border-gray-300 rounded-lg border-b-red-700 outline-none" : " outline-none flex p-3 text-black border-2 border-gray-300 rounded-lg " }
                      type="text"
                      id="numero"
                      name="numero"
                      value={ numero }
                      onChange={ handleChange }
                      onBlur={ handleBlur }
                    />
                    { errores.numero && <Error>  { errores.numero }</Error> }
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm font-bold text-black font_titulos">Asunto</label>
                  <input
                    className={ errores.asunto ? "flex p-3 text-black border-2 border-gray-300 rounded-lg border-b-red-700 outline-none" : " outline-none flex p-3 text-black border-2 border-gray-300 rounded-lg " }
                    type="text"
                    id="asunto"
                    name="asunto"
                    value={ asunto }
                    onChange={ handleChange }
                    onBlur={ handleBlur }
                  />
                  { errores.asunto && <Error>  { errores.asunto }</Error> }

                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm font-bold text-black font_titulos">Email</label>
                  <input
                    className={ errores.email ? "flex p-3 text-black border-2 border-gray-300 rounded-lg border-b-red-700 outline-none" : " outline-none flex p-3 text-black border-2 border-gray-300 rounded-lg " }
                    type="text"
                    id="email"
                    name="email"
                    value={ email }
                    onChange={ handleChange }
                    onBlur={ handleBlur }
                  />
                  { errores.email && <Error>  { errores.email }</Error> }
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm font-bold text-black font_titulos">Mensaje</label>
                  <textarea
                    className={ errores.mensaje ? "flex p-3 text-black border-2 border-gray-300 rounded-lg border-b-red-700 outline-none" : " outline-none flex p-3 text-black border-2 border-gray-300 rounded-lg " }
                    rows="10"
                    type="text"
                    id="mensaje"
                    name="mensaje"
                    value={ mensaje }
                    onChange={ handleChange }
                    onBlur={ handleBlur }
                  ></textarea>
                  { errores.mensaje && <Error>  { errores.mensaje }</Error> }
                </div>
                <button
                  type="submit"
                  className="w-full p-4 mt-4 font-bold text-white bg-[#ff561d] font_titulos transition duration-300 ease-in-out transform cursor-pointer eading-6 hover:bg-black hover:scale-90"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;