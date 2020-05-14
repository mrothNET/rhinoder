const throttle = 500;

const cmd = ['deno', ...Deno.args];
const startApp = () => Deno.run({ cmd });

let app: Deno.Process = startApp();

function restartApp() {
  app.close();
  app = startApp();
}

let timeout: number | undefined;

for await (const event of Deno.watchFs('.')) {
  if (event.kind !== 'access') {
    timeout ?? clearTimeout(timeout);
    timeout = setTimeout(restartApp, throttle);
  }
}
