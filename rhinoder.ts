const throttle = 500;

if (Deno.args.length === 0) {
  console.log('Usage: rhinoder [ARGS]');
  Deno.exit(1);
}

const cmd = ['deno', ...Deno.args];

let app: Deno.Process | undefined;
const startApp = () => (app = Deno.run({ cmd }));
const stopApp = () => app && (app.close(), (app = undefined));

startApp();

let timer: number | undefined;
for await (const event of Deno.watchFs('.')) {
  if (event.kind !== 'access') {
    stopApp();
    timer && clearTimeout(timer);
    timer = setTimeout(startApp, throttle);
  }
}
