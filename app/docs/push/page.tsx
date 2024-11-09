import React from 'react'

const PushCommand = () => {
  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-1">
      <div className="mx-auto w-full min-w-0">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          meow-cli push
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The <code>meow-cli push</code> command allows you to push data to a specified repository by providing the repository name, a passkey for authentication, and the path of the data you want to push. The command also supports setting the visibility of the repository.
        </p>

       
        <section className="mt-6">
          <h2 className="text-3xl font-bold">Usage</h2>
          <p className="mt-4">
            To push data to a repository, use the following syntax:
          </p>
          <pre className="bg-gray-200 p-4 rounded mt-4">
            <code>meow-cli push &lt;repoName&gt; &lt;passkey&gt; &lt;startPath&gt; [visibility]</code>
          </pre>
          <p className="mt-4">
            Replace <code>&lt;repoName&gt;</code> with the name of the repository, <code>&lt;passkey&gt;</code> with your unique passkey, and <code>&lt;startPath&gt;</code> with the path to the data you want to push. The <code>[visibility]</code> parameter is optional and defaults to <code>public</code>.
          </p>
        </section>

        {/* Example */}
        <section className="mt-6">
          <h2 className="text-3xl font-bold">Example</h2>
          <p className="mt-4">
            Here’s an example of pushing data to a repository named <code>my-project</code> with a passkey:
          </p>
          <pre className="bg-gray-200 p-4 rounded mt-4">
            <code>meow-cli push my-project 12345 /path/to/data public</code>
          </pre>
          <p className="mt-4">
            In this example, the repository <code>my-project</code> will be updated with the data located at <code>/path/to/data</code> using the passkey <code>12345</code>, and the repository visibility will be set to <code>public</code>.
          </p>
        </section>

        {/* Flags or Options */}
        <section className="mt-6">
          <h2 className="text-3xl font-bold">Parameters</h2>
          <p className="mt-4">
            The <code>meow-cli push</code> command requires three mandatory arguments and one optional:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li><code>&lt;repoName&gt;</code> (required): The name of the repository you're pushing to.</li>
            <li><code>&lt;passkey&gt;</code> (required): Your authentication key for pushing data.</li>
            <li><code>&lt;startPath&gt;</code> (required): The path to the data you wish to push.</li>
            <li><code>[visibility]</code> (optional): The visibility of the repository (<code>public</code> or <code>private</code>). Defaults to <code>public</code> if not provided.</li>
          </ul>
        </section>

        {/* Error Handling */}
        <section className="mt-6">
          <h2 className="text-3xl font-bold">Error Handling</h2>
          <p className="mt-4">
            If any required argument is missing, the following error will be displayed:
          </p>
          <pre className="bg-gray-200 p-4 rounded mt-4">
            <code>Please provide all three arguments for push.</code>
          </pre>
          <p className="mt-4">
            Ensure that <code>repoName</code>, <code>passkey</code>, and <code>startPath</code> are correctly specified.
          </p>
        </section>

        {/* Troubleshooting */}
        <section className="mt-6">
          <h2 className="text-3xl font-bold">Troubleshooting</h2>
          <p className="mt-4">
            If you encounter any errors during the push process, ensure that:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Your passkey is valid and matches the repository.</li>
            <li>The <code>startPath</code> points to the correct location of your data.</li>
            <li>You have the necessary permissions to push to the repository.</li>
          </ul>
        </section>
      </div>
    </main>
  )
}

export default PushCommand
