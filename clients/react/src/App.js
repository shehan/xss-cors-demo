import React, {useState} from 'react';

function App() {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [messages, setMessages] = useState([]);

    const get_messages = () => {
        setMessages([])
        fetch('http://localhost:5000/messages')
            .then(res => res.json())
            .then((data) => {
                for (let i = 0; i < data.result.length; i++) {
                    console.log(data.result[i][2])
                    // let url = data[i].url;
                    setMessages(messages => [...messages, {title: data.result[i][1], body: data.result[i][2]}])
                }
            })
            .catch(console.log)
    }

    const save_data = () => {
        if (title === "" || body === "") {
            alert('Empty title/body!')
        }

        fetch('http://localhost:5000/messages', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({title: title, body: body})
        })
            .then(res => res.json())
            .then((data) => {
                if (data.result === 'True') {
                    get_messages()
                }
            })
            .catch(console.log)
    }

    return (
        <div className="App">
            <div>
                <label>Enter Title: </label>
                <input type='text' placeholder='Enter Title' onChange={e => setTitle(e.target.value)}/>
                <br/><br/>
                <label>Enter Body: </label>
                <textarea placeholder='Enter Body' onChange={e => setBody(e.target.value)}/>
                <br/><br/>
                <button type='button' onClick={save_data}>Save</button>
                <button type='button' onClick={get_messages}>Get Messages</button>
            </div>
            <br/><br/>
            <div>
                {messages.map(message => (
                    <p><h4>{message.title}</h4>{message.body}</p>
                ))}
            </div>
        </div>
    );


}

export default App;
