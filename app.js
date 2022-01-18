const app=Vue.createApp({
   
    data() {
        return{
            firstName: 'Jhon',
            lastName: 'Doe',
            age: 25,
            country: "Australia",
            email: 'jhon@gmail.com',
            gender: 'male',
            cell: "046-439-39-23",
            picture: "https://randomuser.me/api/portraits/men/10.jpg"

        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()

            console.log(results);

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.cell = results[0].cell
            this.age = results[0].dob.age
            this.country = results[0].location.country
        
            this.picture = results[0].picture.large
        }
        
        
    }
})

app.mount('#app')