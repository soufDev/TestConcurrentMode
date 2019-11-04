import { fetchSummary } from "../components/Summary/Summary.api";
import { fetchStats } from "../components/Stats/Stats.api";

export function resourceSummary(url) {
    const summary = fetchSummary(url);
    return createResource(summary);
};

export function resourceStats(url) {
    const stats = fetchStats(url);
    return createResource(stats);
};

export const createResource = (promise) => {
    let status = "pending";
    let result;
    let suspender = promise.then(
        r => {
            status = "success";
            result = r;
        },
        e => {
            status = "error";
            result = e;
        }
    );
    return {
        read() {
        if (status === "pending") {
            throw suspender;
        } else if (status === "error") {
            throw result;
        } else if (status === "success") {
            return result;
        }
        }
    };
} 