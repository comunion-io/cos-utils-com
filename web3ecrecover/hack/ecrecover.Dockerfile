FROM alpine:3.10

COPY hack/build/ecrecover /usr/local/bin/ecrecover

ENV RUN_MODE=prod HTTP_ADDR=0.0.0.0 HTTP_PORT=80

EXPOSE 80

CMD ["ecrecover"]