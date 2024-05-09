<template>
  <main>
    <section>
      <form method="POST" action="/save">
        <fieldset>
          <legend>Check available handle for your shurl</legend>
          <div class="row">
            <div class="column">
              <label for="handle">Handle</label>
              <input type="text" name="handle" id="handle">
            </div>
            <div class="column">
              <label for="url">URL</label>
              <input type="text" name="url" id="url">
            </div>
          </div>
          <input type="submit" value="Try & Create">
        </fieldset>
      </form>
      <RouterView />
    </section>
  </main>
</template>

