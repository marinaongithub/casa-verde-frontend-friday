import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'

const sizes = [ {
    id: 1,
    name: '60 cm',
  },
  {
    id: 2,
    name: '120 cm',
  },
  {
    id: 3,
    name: '180 cm',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SelectMenu() {
  const [selected, setSelected] = useState(null)

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative ml-0 my-2.5 mr-auto w-48 lg:w-64 lg:my-3.5">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white pl-3 pr-10 h-8 text-left text-black shadow-sm ring-1 ring-inset ring-black focus:outline-none focus:ring-2 focus:ring-amber-400 sm:text-sm sm:leading-6 lg:h-14">
              <span className="flex items-center">
                {/* <img src={selected.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" /> */}
                <span className="block truncate text-base font-medium	lg:text-xl">{selected ? selected.name : 'Select'}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronDownIcon className="h-5 w-5 text-black" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base font-sans shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {sizes.map((size) => (
                  <Listbox.Option
                    key={size.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={size}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          {/* <img src={person.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" /> */}
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {size.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
