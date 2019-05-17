export const fetchBenches = (filters) => {
    return $.ajax({
        method:'get', 
        url:'/api/benches',
        data: filters,
        error: (err) => console.log(err)
    })
}