import { useEffect } from "react";
import Router from "next/router";
import useSWR from "swr";
import axios from "axios";

const fetcher = url => axios.get(url).then(res => res.data).catch(err => err.response.data);

export default function useVerify({
    redirectTo = "",
    redirectIfFound = false,
} = {}) {
    const { data: data, mutate: mutateData } = useSWR("/api/auth/verify", fetcher);
    useEffect(() => {
        if (!redirectTo || !data?.role) return;

        if (redirectIfFound && data?.isLoggedIn) {
            Router.push(redirectTo);
        }
        if (redirectTo && !redirectIfFound && !data?.isLoggedIn) {
            Router.push(redirectTo);
        }

    }, [data, redirectIfFound, redirectTo]);

    return { data, mutateData };
}