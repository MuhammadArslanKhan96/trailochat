async function name(topic) {
    const res = await fetch(`https://api.superusapp.com/query`, {
        method: "POST",

        body: JSON.stringify({
            operationName: "ai_completion",
            variables: {
                input: {
                    params: {
                        max_tokens: 1600,
                        temperature: 0,
                        action_type: "HelpMeBrainStorm",
                        output_type: "tree",
                    },
                    message: `User\'s query: "${topic}"`,
                    type: "aideamap",
                },
            },
            query:
                "query ai_completion($input: AICompletionPayload!) {\n  ai_completion(input: $input) {\n    content\n    __typename\n  }\n}\n",
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    console.log(data)
    const content = JSON.parse(data.data.ai_completion.content);
    return content;
}

export default async function handler(req, res) {
    try {
        const data = await name(req.query.topic);
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error);
    }
}