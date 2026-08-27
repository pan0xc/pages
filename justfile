new title:
    hugo new "content/posts/$(date +%Y-%m-%d)-{{ title }}.md"

new-bundle title:
    hugo new "content/posts/$(date +%Y-%m-%d)-{{ title }}/index.md"

dev:
    hugo server --buildDrafts --buildFuture --navigateToChanged

build:
    hugo --minify

build-all:
    hugo --buildDrafts --buildFuture --minify

clean:
    rm -rf public
