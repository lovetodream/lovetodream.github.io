//
//  File.swift
//  
//
//  Created by Timo Zacherl on 19.07.22.
//

import Foundation
import Plot
import Publish

extension Theme where Site == LovetodreamGithubIo {
    static var tailwind: Self {
        Theme(
            htmlFactory: TailwindHTMLFactory(),
            resourcePaths: ["Themes/TailwindTheme/styles.css"]
        )
    }
}

private struct TailwindHTMLFactory<Site: Website>: HTMLFactory {
    let projects: [Project] = [Project(name: "Abonementi",
                                       description: "Keep track of your ongoing subscriptions",
                                       ctaLabel: "App Store",
                                       url: "https://apps.apple.com/us/app/abonementi/id1604089032",
                                       imageURL: "/images/abonementi.png",
                                       color: "blue"),
                               Project(name: "Gitimoji",
                                       description: "A Gitmoji App for macOS",
                                       ctaLabel: "Details",
                                       url: "https://timozacherl.com/apps/#/gitimoji",
                                       imageURL: "/images/gitimoji.png",
                                       color: "yellow")]
    
    func makeIndexHTML(for index: Index,
                       context: PublishingContext<Site>) throws -> HTML {
        HTML(
            .lang(context.site.language),
            .head(for: index, on: context.site),
            .body {
                Wrapper {
                    Header {
                        Div {
                            Image(url: "https://avatars.githubusercontent.com/u/38291523?v=4", description: "Avatar")
                                .class("rounded-full w-24 h-24 ring-1 ring-gray-200 dark:ring-gray-800 shadow-md")
                            H1 {
                                Text("Timo is a ")
                                Link(url: "https://www.apple.com/swift/") {
                                    Symbol.swift
                                }
                                .linkTarget(.blank)
                                .class("mx-2 text-orange-600 hover:text-orange-700 transition-colors")
                                Text(" Swift developer.")
                            }
                            .class("text-3xl font-bold tracking-wide")
                            
                            TimoDescription()
                            
                            TimoSocials()
                                .class("pt-2")
                        }
                        .class("container px-10 mx-auto max-w-screen-lg py-24 space-y-8")
                    }
                    .class("space-y-8")
                    
                    Div {
                        Div {
                            Div {
                                H2 {
                                    Text("Featured Projects")
                                }
                                .class("text-xl tracking-wide font-medium")
                                Paragraph {
                                    Text("A collection of some side projects that have shipped recently.")
                                }
                                .class("text-lg tracking-wide font-light")
                            }
                            .class("space-y-2")
                            
                            ProjectList(projects: projects)
                            .class("grid md:grid-cols-2 gap-8")
                        }
                        .class("container px-10 mx-auto max-w-screen-lg pb-24 space-y-8")
                    }
                    
                    SiteFooter()
                }
            }
        )
    }
    
    func makeSectionHTML(for section: Section<Site>,
                         context: PublishingContext<Site>) throws -> HTML {
        HTML(
            .lang(context.site.language),
            .head(for: section, on: context.site),
            .body {
                SiteHeader(context: context, selectedSelectionID: section.id)
                Wrapper {
                    H1(section.title)
                    ItemList(items: section.items, site: context.site)
                }
                SiteFooter()
            }
        )
    }

    func makeItemHTML(for item: Item<Site>,
                      context: PublishingContext<Site>) throws -> HTML {
        HTML(
            .lang(context.site.language),
            .head(for: item, on: context.site),
            .body(
                .class("item-page"),
                .components {
                    SiteHeader(context: context, selectedSelectionID: item.sectionID)
                    Wrapper {
                        Article {
                            Div(item.content.body).class("content")
                            Span("Tagged with: ")
                            ItemTagList(item: item, site: context.site)
                        }
                    }
                    SiteFooter()
                }
            )
        )
    }

    func makePageHTML(for page: Page,
                      context: PublishingContext<Site>) throws -> HTML {
        HTML(
            .lang(context.site.language),
            .head(for: page, on: context.site),
            .body {
                SiteHeader(context: context, selectedSelectionID: nil)
                Wrapper(page.body)
                SiteFooter()
            }
        )
    }

    func makeTagListHTML(for page: TagListPage,
                         context: PublishingContext<Site>) throws -> HTML? {
        HTML(
            .lang(context.site.language),
            .head(for: page, on: context.site),
            .body {
                SiteHeader(context: context, selectedSelectionID: nil)
                Wrapper {
                    H1("Browse all tags")
                    List(page.tags.sorted()) { tag in
                        ListItem {
                            Link(tag.string,
                                 url: context.site.path(for: tag).absoluteString
                            )
                        }
                        .class("tag")
                    }
                    .class("all-tags")
                }
                SiteFooter()
            }
        )
    }

    func makeTagDetailsHTML(for page: TagDetailsPage,
                            context: PublishingContext<Site>) throws -> HTML? {
        HTML(
            .lang(context.site.language),
            .head(for: page, on: context.site),
            .body {
                SiteHeader(context: context, selectedSelectionID: nil)
                Wrapper {
                    H1 {
                        Text("Tagged with ")
                        Span(page.tag.string).class("tag")
                    }

                    Link("Browse all tags",
                        url: context.site.tagListPath.absoluteString
                    )
                    .class("browse-all")

                    ItemList(
                        items: context.items(
                            taggedWith: page.tag,
                            sortedBy: \.date,
                            order: .descending
                        ),
                        site: context.site
                    )
                }
                SiteFooter()
            }
        )
    }
}

private struct Wrapper: ComponentContainer {
    @ComponentBuilder var content: ContentProvider

    var body: Component {
        Div(content: content)
            .class("min-h-screen flex flex-col justify-between text-gray-800 dark:bg-stone-900 dark:text-gray-200")
    }
}

private struct SiteHeader<Site: Website>: Component {
    var context: PublishingContext<Site>
    var selectedSelectionID: Site.SectionID?

    var body: Component {
        Header {
            Wrapper {
                Link(context.site.name, url: "/")
                    .class("site-name")

                if Site.SectionID.allCases.count > 1 {
                    navigation
                }
            }
        }
    }

    private var navigation: Component {
        Navigation {
            List(Site.SectionID.allCases) { sectionID in
                let section = context.sections[sectionID]

                return Link(section.title,
                    url: section.path.absoluteString
                )
                .class(sectionID == selectedSelectionID ? "selected" : "")
            }
        }
    }
}

private struct ItemList<Site: Website>: Component {
    var items: [Item<Site>]
    var site: Site

    var body: Component {
        List(items) { item in
            Article {
                H1(Link(item.title, url: item.path.absoluteString))
                ItemTagList(item: item, site: site)
                Paragraph(item.description)
            }
        }
        .class("item-list")
    }
}

private struct ItemTagList<Site: Website>: Component {
    var item: Item<Site>
    var site: Site

    var body: Component {
        List(item.tags) { tag in
            Link(tag.string, url: site.path(for: tag).absoluteString)
        }
        .class("tag-list")
    }
}

private struct ProjectList: Component {
    var projects: [Project]
    
    var body: Component {
        List(projects) { project in
            ListItem {
                Link(url: project.url) {
                    Article {
                        Image(url: project.imageURL, description: "Thumbnail for \(project.name)")
                            .class("w-auto h-24 mb-6 group-hover:scale-[1.15] transition-transform duration-700 ease-in-out rounded-3xl shadow-xl")
                        H3 {
                            Text(project.name)
                        }
                        .class("text-lg font-semibold tracking-wide mb-[4px]")
                        Paragraph {
                            Text(project.description)
                        }
                        .class("mb-[2px]")
                        Paragraph {
                            Text(project.ctaLabel + "  &rarr;")
                        }
                        .class("group-hover:opacity-90 text-\(project.color)-400 transition-opacity")
                    }
                    .class("flex justify-center items-center text-center flex-col")
                }
                .class("p-10 block")
            }
            .class("group bg-gray-50 dark:bg-stone-800 ring-1 ring-gray-100 dark:ring-gray-700 rounded-2xl transition-colors duration-300 hover:bg-\(project.color)-400 hover:bg-opacity-[0.05]")
        }
        .listStyle(.unordered)
    }
}

private struct TimoDescription: Component {
    var body: Component {
        Div {
            Paragraph {
                Text("He carefully crafts apps for ")
                Link("iOS", url: "https://www.apple.com/ios")
                    .class("text-red-600 font-medium bg-red-50 hover:bg-red-100 px-2 py-1 rounded-xl transition-colors dark:bg-red-800 dark:bg-opacity-20 dark:hover:bg-red-800 dark:hover:bg-opacity-30")
                Text(", ")
                Link("macOS", url: "https://www.apple.com/macos")
                    .class("text-blue-600 font-medium bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded-xl transition-colors dark:bg-blue-800 dark:bg-opacity-20 dark:hover:bg-blue-800 dark:hover:bg-opacity-30")
                Text(", ")
                Link("tvOS", url: "https://www.apple.com/tvos")
                    .class("text-gray-600 font-medium bg-gray-50 hover:bg-gray-100 px-2 py-1 rounded-xl transition-colors dark:bg-gray-100 dark:bg-opacity-10 dark:hover:bg-gray-100 dark:hover:bg-opacity-20 dark:text-gray-200")
                Text(" and ")
                Link("watchOS", url: "https://www.apple.com/watchos")
                    .class("text-cyan-600 font-medium bg-cyan-50 hover:bg-cyan-100 px-2 py-1 rounded-xl transition-colors dark:bg-cyan-800 dark:bg-opacity-20 dark:hover:bg-cyan-800 dark:hover:bg-opacity-30")
                Text(". He even uses Swift on the Server with ")
                Link("Vapor", url: "https://vapor.codes")
                    .class("text-purple-500 font-medium bg-purple-50 hover:bg-purple-100 px-2 py-1 rounded-xl transition-colors dark:bg-purple-800 dark:bg-opacity-20 dark:hover:bg-purple-800 dark:hover:bg-opacity-30")
                Text(".")
            }
            .linkTarget(.blank)
            .class("text-xl font-light tracking-wide leading-relaxed")
            
            Paragraph {
                Text("He's also sponsoring and contributing to Open Source Projects including ")
                Link(url: "https://github.com/CodeEditApp/CodeEdit") {
                    Image(url: "/images/codeedit.png", description: "Symbol for CodeEdit")
                        .class("inline-block h-6 mb-1")
                    Text("Codeedit")
                }
                .class("mx-1 border-b border-dashed border-black border-opacity-40 hover:border-opacity-80 font-medium dark:hover:border-gray-200 transition-colors")
                Text(".")
            }
            .class("text-xl font-light tracking-wide")
        }
        .class("space-y-6")
    }
}

private struct TimoSocials: Component {
    var body: Component {
        Div {
            List {
                ListItem {
                    Link(url: "https://github.com/lovetodream") {
                        Symbol.github
                    }
                    .class("ring-1 ring-gray-200 hover:bg-gray-50 dark:ring-gray-700 dark:bg-gray-800 dark:bg-opacity-30 dark:hover:bg-gray-800 dark:hover:bg-opacity-60 w-14 h-14 inline-flex items-center justify-center rounded-full transition-colors")
                }
                ListItem {
                    Link(url: "https://www.linkedin.com/in/timo-zacherl-8647531b6/") {
                        Symbol.linkedin
                    }
                    .class("ring-1 ring-blue-200 hover:bg-blue-50 dark:ring-blue-800 dark:ring-opacity-60 dark:bg-blue-800 dark:bg-opacity-10 dark:hover:bg-blue-800 dark:hover:bg-opacity-20 w-14 h-14 inline-flex items-center justify-center rounded-full transition-colors")
                }
                ListItem {
                    Link(url: "mailto:timo@swiftbytimo.com") {
                        Symbol.mail
                    }
                    .class("ring-1 ring-purple-200 hover:bg-purple-50 dark:ring-purple-800 dark:ring-opacity-60 dark:bg-purple-800 dark:bg-opacity-10 dark:hover:bg-purple-800 dark:hover:bg-opacity-20 w-14 h-14 inline-flex items-center justify-center rounded-full transition-colors")
                }
            }
            .listStyle(.unordered)
            .class("flex space-x-6")
        }
    }
}

private struct SiteFooter: Component {
    var body: Component {
        Footer {
            Div {
                Div {
                    Paragraph {
                        Text("Copyright © \(Calendar.current.component(.year, from: .now)) Timo Zacherl. All rights reserved.")
                    }
                    Paragraph {
                        Text("Generated using ")
                        Link("Publish", url: "https://github.com/johnsundell/publish")
                            .class("text-sm font-extralight text-gray-800 dark:text-gray-50 hover:text-black border-b border-transparent hover:border-gray-300 dark:hover:text-white transition-colors")
                    }
                }
                .class("flex flex-col md:flex-row text-center md:text-left space-y-4 md:space-y-0 justify-between text-sm font-extralight")
            }
            .class("container px-10 mx-auto max-w-screen-lg text-gray-500 dark:text-gray-100")
        }
        .class("bg-gray-50 dark:bg-zinc-800 py-16 border-t dark:border-gray-600")
    }
}


// MARK: - Symbols

private enum Symbol {
    static let swift = Span(html: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" class=\"inline-block h-8 mb-1\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M448 156.09c0-4.51-.08-9-.2-13.52a196.31 196.31 0 0 0-2.58-29.42 99.62 99.62 0 0 0-9.22-28A94.08 94.08 0 0 0 394.84 44a99.17 99.17 0 0 0-28-9.22 195 195 0 0 0-29.43-2.59c-4.51-.12-9-.17-13.52-.2H124.14c-4.51 0-9 .08-13.52.2-2.45.07-4.91.15-7.37.27a171.68 171.68 0 0 0-22.06 2.32 103.06 103.06 0 0 0-21.21 6.1q-3.46 1.45-6.81 3.12a94.66 94.66 0 0 0-18.39 12.32c-1.88 1.61-3.69 3.28-5.43 5A93.86 93.86 0 0 0 12 85.17a99.45 99.45 0 0 0-9.22 28 196.31 196.31 0 0 0-2.54 29.4c-.13 4.51-.18 9-.21 13.52v199.83c0 4.51.08 9 .21 13.51a196.08 196.08 0 0 0 2.58 29.42 99.3 99.3 0 0 0 9.22 28A94.31 94.31 0 0 0 53.17 468a99.47 99.47 0 0 0 28 9.21 195 195 0 0 0 29.43 2.59c4.5.12 9 .17 13.52.2H323.91c4.51 0 9-.08 13.52-.2a196.59 196.59 0 0 0 29.44-2.59 99.57 99.57 0 0 0 28-9.21A94.22 94.22 0 0 0 436 426.84a99.3 99.3 0 0 0 9.22-28 194.79 194.79 0 0 0 2.59-29.42c.12-4.5.17-9 .2-13.51V172.14c-.01-5.35-.01-10.7-.01-16.05zm-69.88 241c-20-38.93-57.23-29.27-76.31-19.47-1.72 1-3.48 2-5.25 3l-.42.25c-39.5 21-92.53 22.54-145.85-.38A234.64 234.64 0 0 1 45 290.12a230.63 230.63 0 0 0 39.17 23.37c56.36 26.4 113 24.49 153 0-57-43.85-104.6-101-141.09-147.22a197.09 197.09 0 0 1-18.78-25.9c43.7 40 112.7 90.22 137.48 104.12-52.57-55.49-98.89-123.94-96.72-121.74 82.79 83.42 159.18 130.59 159.18 130.59 2.88 1.58 5 2.85 6.73 4a127.44 127.44 0 0 0 4.16-12.47c13.22-48.33-1.66-103.58-35.31-149.2C329.61 141.75 375 229.34 356.4 303.42c-.44 1.73-.95 3.4-1.44 5.09 38.52 47.4 28.04 98.17 23.13 88.59z\"></path></svg>")
    static let github = Span(html: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 496 512\" class=\"w-8 h-8\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z\"></path></svg>")
    static let linkedin = Span(html: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" class=\"text-blue-500 w-8 h-8\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z\"></path></svg>")
    static let mail = Span(html: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"text-purple-500 w-8 h-8\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z\"></path></svg>")
}
