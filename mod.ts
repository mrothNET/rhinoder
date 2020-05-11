function startProcess(args: string[] = []): Deno.Process {
  return Deno.run({ cmd: ['deno', ...args] });
}

const throttle = 500;

let app: Deno.Process = startProcess(Deno.args);
let timeout: number | undefined;

function restartApp() {
  app.close();
  app = startProcess(Deno.args);
}

for await (const event of Deno.watchFs('.')) {
  if (event.kind !== 'access') {
    timeout ?? clearTimeout(timeout);
    timeout = setTimeout(restartApp, throttle);
  }
}
