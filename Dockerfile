FROM node:24-alpine
WORKDIR /app
COPY server.js .
EXPOSE 3000
# Willy waits for this to report healthy before routing traffic to a new container.
HEALTHCHECK --interval=10s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1:3000/health || exit 1
CMD ["node", "server.js"]
