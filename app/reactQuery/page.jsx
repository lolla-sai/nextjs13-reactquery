"use client";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const POSTS = [
    { id: 0, title: "Post 1" },
    { id: 1, title: "Post 2" },
];

function ReactQuery() {
    const postQuery = useQuery({
        queryKey: ["post"],
        queryFn: (obj) => {
            console.log(obj, obj.queryKey);
            // you can use this query key to do things like invalidating etc.
            return wait(1000).then((result) => [...POSTS]);
        },
    });

    const queryClient = useQueryClient();

    const newPostMutation = useMutation({
        mutationFn: (title) => {
            wait(1000).then(() => {
                POSTS.push({ id: crypto.randomUUID(), title });
            });
        },
    });

    if (postQuery.isLoading) return <h1>Loading...</h1>;
    if (postQuery.error) return <h1>There is an error</h1>;

    return (
        <>
            <div className="m-6">
                {postQuery.data.map((post) => (
                    <h1 className="text-3xl mb-4" key={post.id}>
                        {post.title}
                    </h1>
                ))}
            </div>
            <button
                disabled={newPostMutation.isLoading}
                onClick={() => newPostMutation.mutate("New Post")}
            >
                Mutate
            </button>
        </>
    );
}

function wait(duration) {
    return new Promise((resolve) => setTimeout(resolve, duration));
}

export default ReactQuery;
