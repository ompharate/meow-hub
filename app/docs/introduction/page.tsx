import React from 'react'

const Introduction = () => {
  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-1">
      <div className="mx-auto w-full min-w-0">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Meow CLI
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Welcome to Meow CLI, a simple, fast, and efficient command-line tool that allows you to push and pull objects seamlessly, with no need for authentication. Whether you're working on a small personal project or a larger enterprise application, Meow CLI offers a lightweight solution to streamline your workflow.
        </p>

        <section className="mt-6">
          <h2 className="text-3xl font-bold">What is Meow CLI?</h2>
          <p className="mt-4">
            Meow CLI is designed to simplify object storage operations with an intuitive, easy-to-use interface. It eliminates the need for complex authentication procedures, allowing users to focus on managing their files efficiently.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-3xl font-bold">Why Use Meow CLI?</h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Instant file transfers with no setup overhead</li>
            <li>No authentication required—just push or pull</li>
            <li>Optimized for speed and simplicity</li>
            <li>Perfect for quick file management tasks and rapid prototyping</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-3xl font-bold">Key Features</h2>
          <p className="mt-4">
            Meow CLI provides a range of features designed to make object management easy:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Single-command push and pull</li>
            <li>Lightweight and fast execution</li>
            <li>No authentication or credentials needed</li>
            <li>Cross-platform support</li>
          </ul>
        </section>
      </div>
    </main>
  )
}

export default Introduction
