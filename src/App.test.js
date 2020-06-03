import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import {fetchMissions as mockFetchMission} from "./api/fetchMissions";

import App from './App';

import { act } from 'react-dom/test-utils';

import {missionFixture} from './components/MissionsList.test';

jest.mock("./api/fetchMissions");
//console.log(mockFetchMission);

test("App fetches and renders Missions data", async () =>{
    //expect(false).toBe(false);
    mockFetchMission.mockResolvedValueOnce({data: missionFixture});

    const {getByText, queryAllByTestId} = render(<App />)

    const button = getByText(/get data/i);
    // act(() => {
    //     fireEvent.click(button);
    // });

    fireEvent.click(button);

    getByText(/we are fetching data/i);
  
   await waitFor (() => { expect(queryAllByTestId('mission')).toHaveLength(3);
});
   

});