import React from 'react'

const PullCommand = () => {
  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-1">
      <div className="mx-auto w-full min-w-0">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          meow-cli pull
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The <code>meow-cli pull</code> command allows you to pull a repository or an object from a remote source with just a single command. No authentication is required, making it fast and easy to retrieve the latest version of your project or object.
        </p>

        {/* Usage Instructions */}
        <section className="mt-6">
          <h2 className="text-3xl font-bold">Usage</h2>
          <p className="mt-4">
            To pull a repository, use the following syntax:
          </p>
          <pre className="bg-gray-200 p-4 rounded mt-4">
            <code>meow-cli pull &lt;repoName&gt;</code>
          </pre>
          <p className="mt-4">
            Replace <code>&lt;repoName&gt;</code> with the name of the repository or object you want to pull.
          </p>
        </section>

        {/* Example */}
        <section className="mt-6">
          <h2 className="text-3xl font-bold">Example</h2>
          <p className="mt-4">
            Here’s an example of pulling a repository named <code>my-project</code>:
          </p>
          <pre className="bg-gray-200 p-4 rounded mt-4">
            <code>meow-cli pull my-project</code>
          </pre>
          <p className="mt-4">
            This command will pull the <code>my-project</code> repository from the remote server into your current working directory.
          </p>
        </section>

        {/* Flags or Options */}
        <section className="mt-6">
          <h2 className="text-3xl font-bold">Flags and Options</h2>
          <p className="mt-4">
            The <code>meow-cli pull</code> command also supports the following optional flags:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              <code>--force</code>: Force the pull operation even if there are local changes.
            </li>
            <li>
              <code>--branch &lt;branchName&gt;</code>: Specify a branch to pull from (default is the main branch).
            </li>
            <li>
              <code>--dry-run</code>: Simulate the pull operation without making any changes.
            </li>
          </ul>
        </section>

        {/* Troubleshooting */}
        <section className="mt-6">
          <h2 className="text-3xl font-bold">Troubleshooting</h2>
          <p className="mt-4">
            If you encounter any issues while pulling a repository, check the following:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Ensure that the repository name is correct.</li>
            <li>Verify your internet connection.</li>
            <li>Use the <code>--force</code> flag if there are conflicting changes.</li>
          </ul>
        </section>
      </div>
    </main>
  )
}

export default PullCommand
