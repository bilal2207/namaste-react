// const heading = React.createElement("H1",{id:"heading"},"Hello World from React");

const heading = React.createElement("div",{id:"parent"},
     React.createElement("div",{id:"child"}, 
     React.createElement("h1",{id:"heading"},'Hello Hello Hello! awaz aa rahi he' ) )
     ) 

            const root = ReactDOM.createRoot(document.getElementById('root'))

            root.render(heading);

            console.log(heading);