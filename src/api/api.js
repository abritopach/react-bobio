/**
 * Description [Access endpoint for passengers.]
 * @return { Array }
 */

// const PASSENGERS_API_ENDPOINT = `http://localhost:3004/passengers`;
const PASSENGERS_API_ENDPOINT = `http://localhost:5656/passengers`;

export const fetchPassengers = () => {

    return fetch(PASSENGERS_API_ENDPOINT)
        .then(response => {
            return response.json()
        })
};

export const createPassenger = (data) => {
    return fetch(PASSENGERS_API_ENDPOINT,
    {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        return response.json();
    })
}