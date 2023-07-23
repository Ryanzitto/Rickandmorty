import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import { describe, expect, it } from "@jest/globals";
import axios from "axios";
import { render, screen, fireEvent, act } from "@testing-library/react";
import Characters from "../../app/components/SectionCharacters";
import getReduxStore from "../../app/configureStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { useState } from "react";

const { store, persistor } = getReduxStore();

describe("Characters Component", () => {
  test("Renderização do componente sem erros", () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Characters />
        </PersistGate>
      </Provider>
    );
    // Verifica se o componente foi renderizado sem erros
    expect(screen.getByTestId("characters-container")).toBeInTheDocument();
  });

  test("Verificação do título", () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Characters />
        </PersistGate>
      </Provider>
    );
    // Verifica se o título "CHARACTERS" está presente na tela
    const titleElement = screen.getByTestId("characters-title");
    expect(titleElement).toBeInTheDocument();
  });

  test("Searching for characters", async () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Characters />
        </PersistGate>
      </Provider>
    );

    const name = "Rick";
    // Mock axios GET request
    const axiosGetMock = jest.spyOn(axios, "get");
    axiosGetMock.mockResolvedValue({
      data: {
        results: [
          {
            created: "2017-11-04T18:48:46.250Z",
            episode: [
              "https://rickandmortyapi.com/api/episode/1",
              "https://rickandmortyapi.com/api/episode/2",
            ],
            gender: "Male",
            id: 1,
            image: "https://rickandmortyapi.com/api/character/",
            location: {
              name: "Citadel of Ricks",
              url: "https://rickandmortyapi.com/api/location/3",
            },
            name: `${name}`,
            origin: {
              name: "Earth (C-137)",
              url: "https://rickandmortyapi.com/api/location/1",
            },
            species: "Human",
            status: "Alive",
            type: "",
            url: "https://rickandmortyapi.com/api/character/1",
          },
        ],
        info: {
          count: 186,
          next: "https://rickandmortyapi.com/api/character/?page=2&species=Human&status=alive&gender=male",
          pages: 10,
          prev: null,
        },
      },
    });

    // Type "Rick" in the search input
    const searchInput = screen.getByTestId("Input");
    fireEvent.change(searchInput, { target: { value: name } });

    // Click the search button
    const searchButton = screen.getByTestId("trigger");
    fireEvent.click(searchButton);

    // Wait for the data to load
    await screen.findAllByText((content, element) => {
      return element?.textContent === name;
    });

    // Check if the characters are displayed
    const characterNames = await screen.findAllByText((content, element) => {
      return element?.textContent === name;
    });
    expect(characterNames.length).toBeGreaterThan(0);

    // Check if the API was called with the correct parameters
    expect(axiosGetMock).toHaveBeenCalledWith(
      `https://rickandmortyapi.com/api/character/?name=${name}&species=Human&status=alive&gender=male`
    );

    // Reset the mock
    axiosGetMock.mockRestore();
  });
});
