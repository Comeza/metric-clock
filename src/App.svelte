<script lang="ts">
    import { onMount } from "svelte";

    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    const mod = (divisee: number, base: number) =>
        Math.round(divisee - Math.floor(divisee / base) * base);

    onMount(() => {
        let ref: number;

        const loop = () => {
            const now = new Date();

            const millis =
                now.getHours() * 3600 +
                now.getMinutes() * 60 +
                now.getSeconds() +
                (now.getTime() % 1000) / 1000;

            const mtime = millis / 0.864;

            hours = Math.floor(mtime / 10000);
            minutes = Math.floor((mtime % 10000) / 100);
            seconds = Math.floor(mtime % 100);

            ref = requestAnimationFrame(loop);
        };

        loop();

        return () => cancelAnimationFrame(ref);
    });

    const leadingZero = (num: number) =>
        num < 10 ? +"0" + num.toString() : num.toString();
</script>

<main>
    <div
        class="flex w-dvw h-dvh bg-red bg-red justify-center items-center font-mono font-bold text-9xl bg-slate-100 dark:bg-black"
    >
        <div class="flex flex-col md:flex-row gap-x-16 dark:text-white">
            <div>
                {leadingZero(hours)}
            </div>

            <div>
                {leadingZero(minutes)}
            </div>

            <div>
                {leadingZero(seconds)}
            </div>
        </div>
    </div>
</main>
