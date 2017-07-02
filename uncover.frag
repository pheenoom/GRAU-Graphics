#version 330 core

in vec4 frontColor;
in vec4 vs_vertexNDC;
out vec4 fragColor;

uniform float time;

void main()
{
    float x = (vs_vertexNDC + 1.0).x; // 0..2
    if (x > time) {
        discard;
    }
    fragColor = vec4(0.0, 0.0, 1.0, 1.0);
}
