module Main exposing (..)

import Browser
import Html exposing (Html, div, p, a, text, section, h1, h2, ul, li, img, article, main_, h3, header, node)
import Html.Attributes exposing (attribute, class, href, target, attribute, draggable, src, alt, rel, id, style)
import Models exposing (..)
import Components.Footer exposing (footerSection)


main : Program () Model Msg
main =
    Browser.document
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }


view : Model -> Browser.Document Msg
view model =
    { title = site_title
    , body = [ page model ]
    }


page : Model -> Html Msg
page model =
    -- general website layout
    div [ class "min-h-screen flex flex-col justify-between text-gray-800 dark:text-gray-200" ]
        [ headerSection model
        , viewPortfolioSection model
        , footerSection
        , canvasBackground
        ]


w : number
w = 400
h : number
h = 400

canvasBackground : Html Msg
canvasBackground =
    div 
        [ class "fixed inset-0 pointer-events-none print:hidden"
        , style "z-index" "-1"
        , style "mask-image" "radial-gradient(circle, transparent, black)"
        , style "--webkit-mask-image" "radial-gradient(circle, transparent, black)"
        ]
        [ node "canvas" 
            [ attribute "width" (String.fromFloat w) 
            , attribute "height" (String.fromFloat h)
            , id "canvas" ]
            []
        ]


headerSection : Model -> Html Msg
headerSection model =
    header [ class "space-y-8" ] 
    [ div [ class "container px-10 mx-auto max-w-screen-lg py-24 space-y-8" ] 
        [ img [ src "https://avatars.githubusercontent.com/u/38291523?v=4", alt "Avatar", attribute "loading" "eager", class "rounded-full w-24 h-24 ring-1 ring-gray-200 dark:ring-gray-800 shadow-md" ] []
        , h1 [ class "text-3xl font-bold tracking-wide" ] 
            [ text "Timo is a "
            , a [ href "https://www.apple.com/swift/", target "_blank", rel "noreferrer", class "mx-2 text-orange-600 hover:text-orange-700 transition-colors" ] [ swiftIcon ]
            , text " Swift Developer."
            ]
        , introSection
        , socialsSection model
        ]
    ]


introSection : Html Msg
introSection =
    div [ class "space-y-6" ]
        [ p [ class "text-xl font-light tracking-wide leading-relaxed" ] 
            [ text "He carefully crafts apps for " 
            , a [ href "https://www.apple.com/ios", target "_blank", rel "noreferrer", class "text-red-600 font-medium bg-red-50 hover:bg-red-100 px-2 py-1 rounded-xl transition-colors dark:bg-red-800 dark:bg-opacity-20 dark:hover:bg-red-800 dark:hover:bg-opacity-30" ] [ text "iOS" ]
            , text ", "
            , a [ href "https://www.apple.com/macos", target "_blank", rel "noreferrer", class "text-blue-600 font-medium bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded-xl transition-colors dark:bg-blue-800 dark:bg-opacity-20 dark:hover:bg-blue-800 dark:hover:bg-opacity-30" ] [ text "macOS" ]
            , text ", "
            , a [ href "https://www.apple.com/tvos", target "_blank", rel "noreferrer", class "text-gray-600 font-medium bg-gray-50 hover:bg-gray-100 px-2 py-1 rounded-xl transition-colors dark:bg-gray-100 dark:bg-opacity-10 dark:hover:bg-gray-100 dark:hover:bg-opacity-20 dark:text-gray-200" ] [ text "tvOS" ]
            , text " and "
            , a [ href "https://www.apple.com/watchos", target "_blank", rel "noreferrer", class "text-cyan-600 font-medium bg-cyan-50 hover:bg-cyan-100 px-2 py-1 rounded-xl transition-colors dark:bg-cyan-800 dark:bg-opacity-20 dark:hover:bg-cyan-800 dark:hover:bg-opacity-30" ] [ text "watchOS" ]
            , text ". He even uses Swift on the Server with "
            , a [ href "https://vapor.codes", target "_blank", rel "noreferrer", class "text-purple-500 font-medium bg-purple-50 hover:bg-purple-100 px-2 py-1 rounded-xl transition-colors dark:bg-purple-800 dark:bg-opacity-20 dark:hover:bg-purple-800 dark:hover:bg-opacity-30" ] [ text "Vapor" ]
            , text "."
            ]
        , p [ class "text-xl font-light tracking-wide" ] [ text "He's also contributing to Open Source Projects." ]
        ]


socialsSection : Model -> Html Msg
socialsSection { socials } = 
    section [ class "pt-2" ] 
        [ List.map viewSocial socials
            |> ul [ class "flex space-x-6" ] 
        ]


viewSocial : Social -> Html Msg
viewSocial { link, icon, linkClass } =
    li []
        [ a [ href link, rel "noreferrer", target "_blank", class ("w-14 h-14 inline-flex items-center justify-center rounded-full transition-colors " ++ linkClass) ]
            [ icon ]
        ]


viewPortfolioSection : Model -> Html Msg
viewPortfolioSection {projects} =
    main_ []
        [ section []
            [ div [ class "container px-10 mx-auto max-w-screen-lg pb-24 space-y-8" ]
                [ div [ class "space-y-2" ] 
                    [ h2 [ class "text-xl tracking-wide font-medium" ] [ text "Featured Projects" ]
                    , p [ class "text-lg tracking-wide font-light" ] [ text "A collection of projects that have shipped recently" ]
                    ]
                , List.map viewPortfolioItem projects
                    |> div [ class "grid md:grid-cols-2 gap-8" ]
                ]
            ]
        ]


viewPortfolioItem : Project -> Html msg
viewPortfolioItem { name, description, image, link, linkLabel, projectClass, linkClass, withShadow } =
    let
        projectLink =
            isLink link

        isLink url =
            if url == "" then
                [ href "#" ]

            else
                [ href link, target "_blank" ]
    in 
    let
        shadowClass =
            if withShadow then
                " shadow-xl"

            else
                ""
    in
    -- Recent work items
    a (class ("group bg-gray-50 dark:bg-zinc-800 ring-1 ring-gray-100 dark:ring-gray-700 p-10 rounded-2xl transition-colors duration-300 " ++ projectClass) :: projectLink) 
    [
        article [ class "flex justify-center items-center text-center flex-col" ] 
        [
            img [ src image, alt name, draggable "false", attribute "loading" "lazy", class ("w-auto h-24 mb-6 group-hover:scale-[1.15] transition-transform duration-700 ease-in-out rounded-3xl" ++ shadowClass) ] [],
            h3 [ class "text-lg font-semibold tracking-wide mb-[4px]" ] [ text name ],
            p [ class "mb-[2px]" ] [ text description ],
            p [ class ("group-hover:opacity-90 " ++ linkClass) ] [ text (linkLabel ++ " →") ]
        ]
    ]


site_title : String
site_title =
    "Timo Zacherl - Software Engineer"