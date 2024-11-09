import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const SlideBar = () => {
  return (
        <div className="w-full">
          <div className="pb-4">
            <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
              Getting Started
            </h4>
            <div className="grid grid-flow-row auto-rows-max text-sm">
              <Link
                href="/docs/introduction"
                className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline"
              >
                Introduction
              </Link>
              <Link
                href="/docs/installation"
                className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline"
              >
                Installation
              </Link>
            </div>
          </div>
          <div className="pb-4">
            <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
              Using meow-cli
            </h4>
            <div className="grid grid-flow-row auto-rows-max text-sm">
              <Collapsible>
                <CollapsibleTrigger className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline">
                  <ChevronRight className="mr-1 h-4 w-4" />
                  Basic Pull Push
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4">
                  <Link
                    href="/docs/pull"
                    className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline"
                  >
                    Pull
                  </Link>
                  <Link
                    href="/docs/push"
                    className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline"
                  >
                    Push
                  </Link>
                </CollapsibleContent>
              </Collapsible>
              <Collapsible>
                <CollapsibleTrigger className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline">
                  <ChevronRight className="mr-1 h-4 w-4" />
                  Optional
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4">
                  <Link
                    href="/docs/components/button"
                    className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline"
                  >
                    Create Private Package
                  </Link>
                  <Link
                    href="/docs/components/input"
                    className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline"
                  >
                    .mignore file
                  </Link>
                </CollapsibleContent>
              </Collapsible>
              <Link
                href="https://ompharate.tech"
                className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline"
              >
                Developer
              </Link>
            </div>
          </div>
        </div>
      
  )
}

export default SlideBar