export const resolvers = {
    Query : {
        authors : () =>{
            return [{
                id: 1,
                name: 'Gowri Shankar'
            }]
        },
        books : () =>{
            return [{
                id: 1,
                title: 't1'
            }]
        }
    }
} 