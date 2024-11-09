import React from 'react'

const Installation = () => {
  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-1">
      <div className="mx-auto w-full min-w-0">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Installation
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Follow the steps below to install Meow CLI on your system.
        </p>

        {/* Installation Steps */}
        <section className="mt-6">
          <h2 className="text-3xl font-bold">Step 1: Download</h2>
          <p className="mt-4">
            You can download the latest version of Meow CLI from the official GitHub repository. 
            <a href="https://github.com/meowcli" className="text-blue-600 underline">Click here</a> to download.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-3xl font-bold">Step 2: Install</h2>
          <p className="mt-4">
            Once downloaded, open your terminal and run the following command to install it globally:
          </p>
          <pre className="bg-gray-200 p-4 rounded mt-4">
            <code>npm install -g meow-cli</code>
          </pre>
        </section>

        <section className="mt-6">
          <h2 className="text-3xl font-bold">Step 3: Verify Installation</h2>
          <p className="mt-4">
            After installation, verify that Meow CLI is installed correctly by running:
          </p>
          <pre className="bg-gray-200 p-4 rounded mt-4">
            <code>meow --version</code>
          </pre>
          <p className="mt-4">
            If the installation was successful, you should see the version number displayed.
          </p>
        </section>

      </div>
    </main>
  )
}

export default Installation
