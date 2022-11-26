// nota: se le llama adaapter porque su objetivo sera adaptar una funcionalidad de una api externa a nuestro codigo

import axios from "axios";

export interface httpAdapter {
  get<T>(url: string): Promise<T>;
}

export class PokeApiFetchAdapter implements httpAdapter {
  //luego de implementar la interfaz httpAdapter se debe implementar el metodo get obligatoriamente
  async get<T>(url: string): Promise<T> {
    const resp = await fetch(url);
    const data: T = await resp.json();

    return data;
  }
}

export class PokeApiAdapter implements httpAdapter {
  private readonly axios = axios; // creamos una propiedad privada porque si algun dia quiero cambiar axios, no tengo que cambiarlo en todos los metodos, solo en la propiedad privada

  async get<T>(url: string): Promise<T> {
    const { data } = await this.axios.get<T>(url); // peticion get a la api externa
    return data;
  }

  async post(url: string, data: any) {}
  async patch(url: string, data: any) {}
  async delete(url: string) {}
}
